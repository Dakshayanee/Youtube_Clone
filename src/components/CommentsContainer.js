import React from 'react'

const CommentsData = [
    {
        name: "Vishal Khiratkar",
        text: "Hello guys",
        replies: [],
      },
      {
        name: "rupesh",
        text: "Hello boys",
        replies: [
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [],
              },
              {
                name: "Vishal Khiratkar",
                text: "Hello guys",
                replies: [
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [],
                  },
                  {
                    name: "Vishal Khiratkar",
                    text: "Hello guys",
                    replies: [
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [],
                      },
                      {
                        name: "Vishal Khiratkar",
                        text: "Hello guys",
                        replies: [
                          {
                            name: "Vishal Khiratkar",
                            text: "Hello guys",
                            replies: [],
                          },
                          {
                            name: "Vishal Khiratkar",
                            text: "Hello guys",
                            replies: [],
                          },
                          {
                            name: "Vishal Khiratkar",
                            text: "Hello guys",
                            replies: [
                              {
                                name: "Vishal Khiratkar",
                                text: "Hello guys",
                                replies: [
                                  {
                                    name: "Vishal Khiratkar",
                                    text: "Hello guys",
                                    replies: [
                                      {
                                        name: "Vishal Khiratkar",
                                        text: "Hello guys",
                                        replies: [
                                          {
                                            name: "Vishal Khiratkar",
                                            text: "Hello guys",
                                            replies: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
          {
            name: "Vishal Khiratkar",
            text: "Hello guys",
            replies: [],
          },
        ],
      },
]

const Comment = ({data}) => {
const { name,text,replies } =data;
return(
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
)
};

const CommentsList = ({comments}) =>{
 return comments.map((comment ,index) =>(
    <div key={index}>
      <Comment  data={comment}/>
         <div className='pl-5 border border-l-black ml-5'>
         {/* <Comment key={index} data={comment}/>
         <Comment key={index} data={comment}/>
         <Comment key={index} data={comment}/> */}
         <CommentsList comments={comment.replies}/>
         </div>
  </div>
 ));
 }

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className=' text-2xl font-bold'>Comments:</h1>
        {/* <Comment data={CommentsData[0]}/> */}
        <CommentsList  comments={CommentsData}/>
    </div>

  )
}

export default CommentsContainer