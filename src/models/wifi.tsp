// 导入OpenAPI库，用于生成OpenAPI文档
import "@typespec/openapi";

// 使用TypeSpec.OpenAPI命名空间，简化后续装饰器的使用
using TypeSpec.OpenAPI;

// 定义WiFi安全类型枚举
@doc("WiFi security type enum values")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{ name: "none", value: "none", description: "No security" },
            #{ name: "wep", value: "wep", description: "WEP encryption" },
            #{ name: "wpa", value: "wpa", description: "WPA encryption" },
            #{ name: "wpa2", value: "wpa2", description: "WPA2 encryption" }
        ],
    }
)
enum WiFiSecurityType {
    none: "none",
    wep: "wep",
    wpa: "wpa",
    wpa2: "wpa2",
    wpa3: "wpa3",
}

// 定义WiFi频段枚举
@doc("WiFi frequency band enum values")
@extension(
    "x-ms-enum",
    #{
        values: #[
            #{
                name: "mixed",
                value: "mixed",
                description: "Mixed band (2.4GHz and 5GHz)",
            },
            #{ name: "2_4GHz", value: "2_4GHz", description: "2.4GHz band" },
            #{
                name: "5GHz",
                value: "5GHz",
                description: "Mixed band (2.4GHz and 5GHz)",
            },
            #{
                name: "6GHz",
                value: "6GHz",
                description: "Mixed band (2.4GHz and 5GHz)",
            }
        ],
    }
)
@extension("x-enum-varnames", #["mixed", "2_4GHz", "5GHz", "6GHz"])
enum WiFiBand {
    mixed: "mixed",
    `2_4GHz`: "2_4GHz",
    `5GHz`: "5GHz",
    `6GHz`: "6GHz",
}

// 定义WiFi网络状态枚举
@doc("WiFi connection status enum values")
@extension(
    "x-enum-descriptions",
    #["Disconnected", "Connecting", "Connected", "Disconnecting", "Error"]
)
enum WiFiConnectionStatus {
    disconnected: "disconnected",
    connecting: "connecting",
    connected: "connected",
    disconnecting: "disconnecting",
    error: "error",
}

// 定义WiFi网络模型 - 表示扫描到的WiFi网络
model WiFiNetwork {
    @doc("The unique identifier of the WiFi network")
    @visibility(Lifecycle.Read)
    id: string;

    @doc("The SSID of the WiFi network")
    ssid: string;

    @doc("The BSSID of the WiFi network")
    bssid: string;

    @doc("The security type of the WiFi network")
    security: WiFiSecurityType;

    @doc("The signal strength in dBm")
    signalStrength: int32;

    @doc("The WiFi frequency band")
    band: WiFiBand;

    @doc("The WiFi channel")
    channel: uint32;

    @doc("Whether the network is hidden")
    hidden: boolean;

    @doc("Whether this network is the currently connected one")
    isConnected: boolean;

    @doc("Whether this network has a saved configuration")
    isSaved: boolean;

    @doc("The timestamp when the network was last seen")
    @visibility(Lifecycle.Read)
    lastSeen: unixTimestamp32;
}

// 定义WiFi配置模型 - 表示用户保存的WiFi配置
model WiFiConfig {
    @doc("The unique identifier of the WiFi configuration")
    @visibility(Lifecycle.Read)
    id: string;

    @doc("The SSID of the WiFi network to connect to")
    ssid: string;

    @doc("The security type of the WiFi network")
    security: WiFiSecurityType;

    @doc("The password for the WiFi network (required for secured networks). encrypted depends security type")
    @secret
    password?: string;

    @doc("Whether to connect automatically")
    autoConnect: boolean = true;

    @doc("Whether this is a hidden network")
    hidden: boolean = false;

    @doc("The current connection status of this configuration")
    status: WiFiConnectionStatus = WiFiConnectionStatus.disconnected;

    @doc("The timestamp when the configuration was created")
    @visibility(Lifecycle.Read)
    createdAt: unixTimestamp32;

    @doc("The timestamp when the configuration was last updated")
    @visibility(Lifecycle.Read)
    updatedAt: unixTimestamp32;
}

// 定义WiFi网络列表模型
model WiFiNetworkList {
    @doc("The list of available WiFi networks")
    items: WiFiNetwork[];

    @doc("The total number of WiFi networks found")
    total: uint32;
}

// 定义WiFi配置列表模型
model WiFiConfigList {
    @doc("The list of WiFi configurations")
    items: WiFiConfig[];

    @doc("The total number of WiFi configurations")
    total: uint32;
}

// 定义WiFi连接请求模型
model WiFiConnectRequest {
    @doc("The password for the WiFi network (required for secured networks)")
    @secret
    password?: string;

    @doc("Whether to save this configuration for future use")
    saveConfiguration: boolean = true;
}
