// 导入TypeSpec核心库，用于HTTP协议支持
import "@typespec/http";
// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 使用TypeSpec.OpenAPI命名空间，简化后续装饰器的使用
using TypeSpec.OpenAPI;

// 为枚举类型添加文档说明
@doc("Email authentication method enum values")
// 使用@extension装饰器添加OpenAPI扩展属性，这里是为Azure SDK生成服务
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{
                name: "password",
                value: 0,
                description: "Password authentication",
            },
            #{
                name: "otp",
                value: 1,
                description: "One time password authentication",
            },
            #{
                name: "totp",
                value: 2,
                description: "Time-based one time password authentication",
            },
            #{ name: "oauth2", value: 3, description: "OAuth2 authentication" }
        ],
    }
)
// 添加另一个扩展属性，用于指定枚举变量名
@extension("x-enum-varnames", #["password", "otp", "totp", "oauth2"])
// 定义枚举类型，表示邮件认证方式
enum EmailAuthMethod {
    password: 0,
    otp: 1,
    totp: 2,
    oauth2: 3,
}

// 定义Email模型
model Email {
    // 为字段添加文档说明
    @doc("The id of the email")
    // @visibility装饰器用于控制字段在不同操作中的可见性
    // Lifecycle.Read表示该字段仅在读取操作中可见
    @visibility(Lifecycle.Read)
    id: uint32;

    @doc("The email address")
    // @pattern装饰器用于添加正则表达式验证规则，确保邮箱格式正确
    @pattern("/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/")
    // @example装饰器提供示例值
    @example("user@example.com")
    email: string;

    @doc("The authentication method")
    // 引用之前定义的枚举类型
    authMethod: EmailAuthMethod;

    @doc("The password")
    // @secret装饰器标记敏感字段，通常用于密码等保密信息
    @secret
    // 设置字段在创建和更新操作中的可见性
    @visibility(Lifecycle.Create, Lifecycle.Update)
    // 添加密码强度验证的正则表达式（至少包含一个小写字母、一个大写字母、一个数字和一个特殊字符，长度至少8位）
    @pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
    password?: string;

    @doc("The timestamp when the email was created")
    // 使用unix时间戳类型
    createdAt: unixTimestamp32;

    @doc("The timestamp when the email was updated")
    updatedAt: unixTimestamp32;
}

// 定义邮件列表模型
model EmailList {
    @doc("The list of emails")
    // 数组类型，包含多个Email对象
    items: Email[];

    @doc("The total number of emails")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
