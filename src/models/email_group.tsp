// 导入邮件模型，因为邮件组包含多个邮件
import "./email.tsp";

// 为模型添加文档说明
@doc("A group of emails")
// 定义邮件组模型
model EmailGroup {
    @doc("The unique identifier for the group")
    // @visibility装饰器用于控制字段在不同操作中的可见性
    @visibility(Lifecycle.Read)
    id: string;

    @doc("The name of the group")
    name: string;

    // 邮件组包含多个邮件，使用数组类型
    members: Email[];
}

// 为模型添加文档说明
@doc("A list of email groups")
// 定义邮件组列表模型
model EmailGroupList {
    // 数组类型，包含多个EmailGroup对象
    items: EmailGroup[];

    @doc("The total number of email groups")
    total: uint32;

    @doc("The offset to fetch the list, 0 means no offset")
    offset: uint32;

    @doc("The limit to fetch the list, 0 means no limit")
    limit: uint32;
}
