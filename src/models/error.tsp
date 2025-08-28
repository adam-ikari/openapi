// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入状态码枚举模型
import "./status_code.tsp";

// @error装饰器标记这是一个错误响应模型
// 在TypeSpec中，@error装饰器用于标识错误响应模型，这有助于生成更准确的API文档
@error
model Error {
    @doc("The error code")
    // 错误码字段，使用StatusCode枚举类型
    code: StatusCode;

    @doc("The error message")
    // 错误消息字段，使用字符串类型
    msg: string;
}
