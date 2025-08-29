// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

/**
 * 证书信息模型
 * 用于表示上传的证书信息
 */
@doc("Certificate information")
model CertificateInfo {
  @doc("The ID of the certificate")
  id: string;

  @doc("The name of the certificate")
  name?: string;

  @doc("The description of the certificate")
  description?: string;

  @doc("The size of the certificate file in bytes")
  size: uint32;

  @doc("The upload timestamp")
  uploadTime: utcDateTime;

  @doc("The MD5 hash of the certificate file")
  md5: string;
}