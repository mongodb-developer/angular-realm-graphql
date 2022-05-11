exports = async function(args) {
  const { movie_id, limit, offset, sortBy, sortOrder } = args;
  const sortOrderNummerical = sortOrder == "ascending" ? 1 : -1;
  
  const collection = context.services.get("mongodb-atlas").db("sample_mflix").collection("comments");
  
  const comments = await collection.find({ movie_id })
    .sort({ [sortBy]: sortOrderNummerical })
    .skip(offset)
    .limit(limit)
    .toArray();
    
    return comments;
}