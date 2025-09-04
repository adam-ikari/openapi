// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入证书相关的模型定义
import "./models/certificate.tsp";
// 导入错误处理模型
import "./models/error.tsp";

import "./common/pagination.tsp";


// 使用TypeSpec.Http命名空间，简化后续装饰器的使用
using TypeSpec.Http;

// 定义命名空间，将相关API组织在一起
namespace OpenApiV2;

// 为API接口设置路由前缀
@route("/certificates")
// 为API添加标签，用于在生成的文档中分类显示
@tag("CertificateApi")
// 设置API需要Bearer Token认证
@useAuth(BearerAuth)
// 定义WiFiApi接口，包含WiFi相关的操作
interface CertificateApi {
/** Upload a certificate file for WiFi authentication */
  // @post装饰器表示这是一个HTTP POST请求，用于上传证书文件
  @post
  @doc("Upload a certificate file for WiFi authentication")
  @route("/certificates")
  // 设置API需要Bearer Token认证
  @useAuth(BearerAuth)
  uploadCertificate(
    @doc("The certificate file to upload")
    @multipartBody body: {
      /** The certificate file */
      file: HttpPart<File>;
      /** Optional certificate name */
      name?: HttpPart<string>;
      /** Optional certificate description */
      description?: HttpPart<string>;
    }
  ): {
    /** Whether the upload was successful */
    success: boolean;
    /** The ID of the uploaded certificate */
    certificateId: string;
    /** Message describing the result */
    message: string;
  } | Error;

  /** List certificates */
  // @get装饰器表示这是一个HTTP GET请求，用于获取证书列表
  @get
  @route("/certificates")
  // 设置API需要Bearer Token认证
  @useAuth(BearerAuth)
  @list
  listCertificates(
    ...PaginationParams
  ): PagedResult<CertificateInfo>;

  /** Get a specific certificate */
  // @get装饰器表示这是一个HTTP GET请求，用于获取特定证书
  @get
  @route("/certificates/{id}")
  // 设置API需要Bearer Token认证
  @useAuth(BearerAuth)
  getCertificate(
    @doc("The id of the certificate to get")
    @path
    id: uint32,
  ): CertificateInfo | Error;

  /** Delete a certificate */
  // @delete装饰器表示这是一个HTTP DELETE请求，用于删除证书
  @delete
  @route("/certificates/{id}")
  // 设置API需要Bearer Token认证
  @useAuth(BearerAuth)
  deleteCertificate(
    @doc("The id of the certificate to delete")
    @path
    id: uint32,
  ): {
    /** Whether the deletion was successful */
    success: boolean;
    /** Message describing the result */
    message: string;
  } | Error;
}