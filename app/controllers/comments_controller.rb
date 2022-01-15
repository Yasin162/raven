class CommentsController < ApplicationController
    # before_action :authorize
    # def get
    #     comment = Comment.all
        
    #     render json: comment
    # end

    
    def create
        comment = current_user.comments.create(post_params)
        if comment.valid?
        render json: comment
        else
            render json: {error: "something went wrong"}
        end
    end

    def show
        post = Post.find_by(id: params[:id])
        comments = post.comments
        # comments = Comment.select {|c| c[:post_id] === params[:post_id].to_i}
        render json: comments
    end
    
    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def post_params 
        params.require(:comment).permit(:post_id, :text)
    end

end
