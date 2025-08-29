// Import TypeSpec core library for HTTP protocol support
import "@typespec/http";
// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Using TypeSpec.Http and TypeSpec.OpenAPI namespaces
using TypeSpec.Http;
using TypeSpec.OpenAPI;

// Add documentation for the enum type
@doc("Email authentication type enum values")
// 使用@extension装饰器添加OpenAPI扩展属性，这里是为Azure SDK生成服务
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{
                name: "password",
                value: "password",
                description: "Password authentication",
            },
            #{
                name: "otp",
                value: "otp",
                description: "One time password authentication",
            },
            #{
                name: "totp",
                value: "totp",
                description: "Time-based one time password authentication",
            },
            #{
                name: "oauth2",
                value: "oauth2",
                description: "OAuth2 authentication",
            }
        ],
    }
)
// 添加另一个扩展属性，用于指定枚举变量名
@extension("x-enum-varnames", #["password", "otp", "totp", "oauth2"])
// Define enum type representing email authentication methods
enum EmailAuthType {
    password: "password",
    otp: "otp",
    totp: "totp",
    oauth2: "oauth2",
}

// Define Email model
model Email {
    // Add documentation for the field
    @doc("The id of the email")
    // The @visibility decorator controls field visibility in different operations
    // Lifecycle.Read indicates this field is only visible in read operations
    @visibility(Lifecycle.Read)
    id: uint32;

    @doc("The email address")
    // @pattern装饰器用于添加正则表达式验证规则，确保邮箱格式正确
    @pattern("/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/")
    // @example装饰器提供示例值
    @example("user@example.com")
    email: string;

    @doc("The authentication type")
    // 引用之前定义的枚举类型
    authType: EmailAuthType;

    @doc("The password")
    // @secret装饰器标记敏感字段，通常用于密码等保密信息
    @secret
    // 设置字段在创建和更新操作中的可见性
    @visibility(Lifecycle.Create, Lifecycle.Update)
    // 添加密码强度验证的正则表达式（至少包含一个小写字母、一个大写字母、一个数字和一个特殊字符，长度至少8位）
    @pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
    password?: string;

    @doc("The timestamp when the email was created")
    // Using unix timestamp type
    createdAt: unixTimestamp32;

    @doc("The timestamp when the email was updated")
    updatedAt: unixTimestamp32;
}
