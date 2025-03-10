const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwritePostCollectionId: String(
    import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID
  ),
  appwriteLikesCollectionId: String(
    import.meta.env.VITE_APPWRITE_LIKES_COLLECTION_ID
  ),
  appwriteCommentsCollectionId: String(
    import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID
  ),
};

export default conf;
