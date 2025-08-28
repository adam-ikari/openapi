import "@typespec/openapi";

// 使用TypeSpec.OpenAPI命名空间，简化后续装饰器的使用
using TypeSpec.OpenAPI;

// 为枚举类型添加文档说明
@doc("Status Code")
// 使用@extension装饰器添加OpenAPI扩展属性，这里是为Azure SDK生成服务
@extension(
    "x-ms-enum",
    #{
        values: #[
            // 定义枚举值，包含名称、值和描述
            #{ name: "SUCCESS", value: 100000, description: "success" },
            #{ name: "FAILURE", value: 100001, description: "failure" }
        ],
    }
)
// 添加另一个扩展属性，用于指定枚举变量名
@extension("x-enum-varnames", #["SUCCESS", "FAILURE"])
// 定义状态码枚举类型
enum StatusCode {
    SUCCESS: 100000,
    FAILURE: 100001,
}
