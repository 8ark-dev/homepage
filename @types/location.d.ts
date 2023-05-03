export type DoType = {
    name: string
  }
export type SiType = {
    do: DoType
    name: string
}

export type DongType = {
    si: SiType
    name: string

}
//   export type PlayerType = {
//     name: string
//     afreecaId: string
//     minecraftName: string
//     groupName?: string
//     tags: {
//       label: string
//       type?: string
//       customColor?: string
//       disableSearch?: boolean
//     }[]
//   }
  
//   export type PostType = {
//     id: number
//     afreeca_id: number
//     post_id: number
//     title: string
//     post_create_at: string
//     create_at: string
//     player?: PlayerType
//   }
  