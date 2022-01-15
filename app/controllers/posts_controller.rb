class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

   
   def create
        post = current_user.authored_posts.create(text: post_params[:text], image: post_params[:image])
        if post.valid?
            render json: post
        else
            render json: {error: "something went wrong"}
        end
    end

    def update 
    #    byebug
        post = current_user.authored_posts.find_by(id: params[:id])
        post.update(text: params[:text])
        render json: post
    end

    def destroy
        post = current_user.authored_posts.find_by(id: params[:id])
        post.destroy
    end

    def show
        post = Post.find_by(id: params[:id])
        render json: post
    end

private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def post_params 
        params.require(:post).permit(:text, :postId, :id, :image)
    end

end
