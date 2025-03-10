import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    content,
    user_id,
    status,
    image_id,
    video_id,
    likes,
    comments,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        ID.unique(),
        {
          content,
          user_id,
          status,
          image_id,
          video_id,
          likes,
          comments,
        }
      );
    } catch (error) {
      console.log(`error in create post ${error}`);
      alert(error);
    }
  }

  async updatePost(slug, { content, status, image_id, video_id }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          content,
          status,
          image_id,
          video_id,
        }
      );
    } catch (error) {
      console.log(`error in update post ${error}`);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`error in delete post ${error}`);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        [Query.equal("status", "active"), queries]
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);

      return false;
    }
  }

  async getAllPosts() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwrite serive :: getAllPosts :: error", error);

      return false;
    }
  }

  async getUserAllPosts(userid) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        [Query.equal("userid", `${userid}`)]
      );
    } catch (error) {
      console.log("Appwrite serive :: getUserAllPosts :: error", error);

      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  async incrementLikes(popularity, slug) {
    try {
      const likes = popularity + 1;
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          likes,
        }
      );
    } catch (error) {
      console.log(`error in incrementLikes ${error}`);
      return false;
    }
  }

  async decrementLikes(popularity, slug) {
    try {
      const likes = popularity - 1;
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          likes,
        }
      );
    } catch (error) {
      console.log(`error in decrementLikes ${error}`);
      return false;
    }
  }

  async userLikes(slug, { user_id, post_id }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteLikesCollectionId,
        slug,
        {
          user_id,
          post_id,
        }
      );
    } catch (error) {
      console.log(`error in userLikes ${error}`);
      return false;
    }
  }

  async deleteUserLikes(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteLikesCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`error in deleteUserLikes ${error}`);
      return false;
    }
  }

  getVideoPreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log(
        error,
        `Appwrite error || getVideoPreview in ${fileId} fileId`
      );
    }
  }

  getImagePreviews(fileId, height, width, quality) {
    try {
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
        width || 0,
        height || 0,
        "center",
        quality || "70",
        0,
        "000",
        0,
        1,
        0,
        "FFFFFF",
        "webp"
      );
    } catch (error) {
      console.log(
        error,
        `Appwrite error || getImagePreviews in ${fileId} fileId`
      );
    }
  }

  async createComment({ content, user_id, post_id }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCommentsCollectionId,
        ID.unique(),
        {
          content,
          user_id,
          post_id,
        }
      );
    } catch (error) {
      console.log(`error in createComment ${error}`);
      alert(error);
    }
  }

  async updateComment(slug, { content }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwritePostCollectionId,
        slug,
        {
          content,
        }
      );
    } catch (error) {
      console.log(`error in updateComment ${error}`);
    }
  }

  async deleteComment(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCommentsCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`error in deleteComment ${error}`);
      return false;
    }
  }

  async getComments(queries) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCommentsCollectionId,
        [Query.equal("status", "active"), queries]
      );
    } catch (error) {
      console.log("Appwrite serive :: getComments :: error", error);

      return false;
    }
  }
}

const service = new Service();
export default service;
