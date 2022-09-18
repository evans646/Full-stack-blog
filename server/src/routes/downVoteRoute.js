import { getDbConnection } from "../db";

export const downVoteRoute = {
  path: "/api/blogs/:name/:userId/downvote",
  method: "post",
  handler: async (req, res) => {
    const db = getDbConnection("techarena");
    const blogName = req.params.name;

    const { userId } = req.params;
    //update the blog by removing the userId from the
    //upvoted id's in order to undo upvote
    await db.collection("blogs").updateOne({ name: blogName },{
        $pull: {
          upvotedIds: userId,
        },
      }
    );

    try {
      const blogInfo = await db.collection("blogs").findOne({ name: blogName });
      await db.collection("blogs").updateOne({ name: blogName },{
          $set: {
            upvotes: blogInfo.upvotes - 1,
          },
        }
      );
    } catch (e) {
      res.sendStatus(500);
    }
    
    const updatedArticleInfo = await db.collection("blogs").findOne({ name: blogName });
    res.status(200).json(updatedArticleInfo);
  },
};
