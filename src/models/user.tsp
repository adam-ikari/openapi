// Import OpenAPI library for generating OpenAPI documentation
import "@typespec/openapi";

// Import email model since it's referenced in the user model
import "./email.tsp";

// Using TypeSpec.OpenAPI namespace to simplify decorator usage
using TypeSpec.OpenAPI;

// Add documentation for the enum type
@doc("User gender enum values")
// 使用@extension装饰器添加OpenAPI扩展属性，这里是为Azure SDK生成服务
@extension(
    "x-ms-enum",
    #{
        values: #[
            // 定义枚举值，包含名称、值和描述
            #{
                name: "secret",
                value: "secret",
                description: "unpublic gender",
            },
            #{ name: "male", value: "male", description: "male gender" },
            #{ name: "female", value: "female", description: "female gender" }
        ],
    }
)
// 添加另一个扩展属性，用于指定枚举变量名
@extension("x-enum-varnames", #["secret", "male", "female"])
// Define gender enum type
enum Gender {
    secret: "secret",
    male: "male",
    female: "female",
}

// Define User model
model User {
    @doc("The unique identifier of the user")
    // @visibility decorator is used to control field visibility in different operations
    // Lifecycle.Read means this field is only visible in read operations
    @visibility(Lifecycle.Read)
    id: uint32;

    @doc("The name of the user")
    // @minLength装饰器设置字符串最小长度
    @minLength(3)
    // @maxLength装饰器设置字符串最大长度
    @maxLength(32)
    // @pattern装饰器用于添加正则表达式验证规则
    @pattern("/^[a-zA-Z0-9_-]+$/")
    name: string;

    @doc("The age of the user, min 1, max 120")
    // @minValue装饰器设置数值最小值
    @minValue(1)
    // @maxValue装饰器设置数值最大值
    @maxValue(120)
    age: uint8;

    @doc("The gender of the user")
    // Reference the previously defined enum type
    gender: Gender;

    @doc("The email of the user")
    // Reference Email model representing the user's associated email
    email: Email;

    @doc("The avatar of the user")
    // @example装饰器提供示例值
    @example("https://example.com/avatar.png")
    // 使用?表示该字段为可选字段
    avatar?: url;

    @doc("The password of the user")
    // @secret装饰器标记敏感字段，通常用于密码等保密信息
    @secret
    // 设置字段在创建和更新操作中的可见性
    @visibility(Lifecycle.Create, Lifecycle.Update)
    password: string;

    @doc("The timestamp when the user was created")
    // Using unix timestamp type
    createdAt: unixTimestamp32;

    @doc("The timestamp when the user was updated")
    updatedAt: unixTimestamp32;
}