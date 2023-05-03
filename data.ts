import { DoType, DongType, SiType } from "./@types/location";

// Path: data.ts
// Compare this snippet from @types/location:

// //대한민국의 도/시/군/구/읍/면/동 단위의 주소를 표현하는 타입스크립트
export const data: DoType[] = [
    {
        name: "서울특별시",
    },
    {
        name: "부산광역시",
    },
    {
        name: "대구광역시",
    }
];

export const data2: SiType[] = [
    {
        do: {
            name: "서울특별시",
        },
        name: ["강남구", "강동구", "강북구", "강서구"],
    },
    {
        do: {
            name: "부산광역시",
        },
        name: ["강서구", "금정구", "남구", "동구"],
    },

    {
        do: {
            name: "대구광역시",
        },
        name: ["남구", "달서구", "달성군", "동구"],
    }
];

export const data3: DongType[] = [
    {
        si: {
            do: {
                name: "서울특별시",
            },
            name: ["강남구", "강동구", "강북구", "강서구"],
        },
        name: ["개포1동", "개포2동", "개포4동", "개포동"],
    },
    {
        si: {
            do: {
                name: "부산광역시",
            },
            name: ["강서구", "금정구", "남구", "동구"],
        },
        name: ["개금동", "개금동", "개금동", "개금동"],
    },

];
