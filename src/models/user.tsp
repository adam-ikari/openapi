// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 导入邮件模型，因为用户模型中引用了邮件模型
import "./email.tsp";

// 使用TypeSpec.OpenAPI命名空间，简化后续装饰器的使用
using TypeSpec.OpenAPI;

// 为枚举类型添加文档说明
@doc("User gender enum values")
// 使用@extension装饰器添加OpenAPI扩展属性，这里是为Azure SDK生成服务
@extension(
    "x-ms-enum",
    #{
        values: #[
            // 定义枚举值，包含名称、值和描述
            #{ name: "secret", value: 0, description: "unpublic gender" },
            #{ name: "male", value: 1, description: "male gender" },
            #{ name: "female", value: 2, description: "female gender" }
        ],
    }
)
// 添加另一个扩展属性，用于指定枚举变量名
@extension("x-enum-varnames", #["secret", "male", "female"])
// 定义性别枚举类型
enum Gender {
    secret: 0,
    male: 1,
    female: 2,
}

// 定义User模型
model User {
    @doc("The unique identifier of the user")
    // @visibility装饰器用于控制字段在不同操作中的可见性
    // Lifecycle.Read表示该字段仅在读取操作中可见
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
    // 引用之前定义的枚举类型
    gender: Gender;

    @doc("The email of the user")
    // 引用Email模型，表示用户关联的邮箱
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
    // 使用unix时间戳类型
    createdAt: unixTimestamp32;

    @doc("The timestamp when the user was updated")
    updatedAt: unixTimestamp32;
}

// 定义用户列表模型
model UserList {
    @doc("The list of users")
    // 数组类型，包含多个User对象
    items: User[];

    @doc("The total number of users")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
