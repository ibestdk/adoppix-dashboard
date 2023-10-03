export const BlogIndexResult = {
    BlogAmount : 20,
    Active : 19,
    unActive : 1,
    blogList : [
        {
        id: 1,
        name: "A and B",
        imageCover: "A and B",
        subject: {
            link : true,
            subjectId : 220222,
            subjectName : "Digital",
            instructor :  "ดร.ณรงค์เดช กีรติพรานนท์ "
        },
        description: "this blog about subject digital of 220222",
        subBlog : {
            isSubBlog : true,
            subBlogAmount : 15,
        },
        isActive : true,
        createAt : "23-06-2023"
    },
        {
        id: 2,
        name: "Visual Studio",
        imageCover: "A and B",
        subject: {
            link : false,
        },
        description: "this blog about basic Visual Studio",
        subBlog : {
            isSubBlog : true,
            subBlogAmount : 2,
        },
        isActive : false,
        createAt : "15-06-2023"
    },
        {
        id: 3,
        name: "Visual Studio",
        imageCover: "A and B",
        subject: {
            link : false,
        },
        description: "this blog about basic Visual Studio",
        subBlog : {
            isSubBlog : false,
            data: {

            },
        },
        isActive : false,
        createAt : "15-06-2023"
    },
       
]
    

}