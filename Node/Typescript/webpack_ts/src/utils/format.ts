export namespace time {
    export function format(time: string) {
        return '2022-02-02'
    }
    export function fn() {

    }
    export const name: string = 'zs'
}
namespace price {
    export function format(time: string) {
        return '99.9'
    }
}

// 命名空间内东西想要使用1需要导出
// 命名空间在其他模块使用也需要使用export导出
time.format
price.format