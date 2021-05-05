<template>
  <div>
    <div id="article-vue_container" class="clearfix"> 
      <div id="article-vue_img_container" class="clearfix">
        <img
          id="article-vue_articleImg"
          :src="'/api' + article.img_url"
          alt=""
        />
      </div>
      <div id="article-vue_text_container" class="clearfix">    
        <div id="article-vue_title_container"><h1>{{ article.title }}</h1></div>
        <mavonEditor
        id="article-vue_content"
          v-model="article.content_url"
          :toolbars="{}"
          :subfield="false"
          defaultOpen="preview"
        />
      </div>
      <div id="article-vue_add_container">
        <div id="article-vue_add_btn" v-if="!$store.state.user.email">
           <a href="/#/Login" style='color:blue;font-size:20px'> 登录 </a>  即可评论
        </div>
        <div  v-else id="article-vue_add_btn">
          <input type="text" placeholder="输入评论（不少于五个字）" class="form-control" v-model="newComment" maxlength="40">
          <button class="btn btn-default" @click="submit">评论</button>
        </div> 
      </div>
      <a v-for="(comment,index) in comments" :key="index" id="article-vue_comments_container" class="clearfix">
        <div id="article-vue_comments_user">{{comment.comment_user_nickname}}： {{comment.comment_content}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { reqArticle , reqComment , reqaddComment} from '../api';
export default {
  data() {
    return {
      article: {},
      comments: [],
      newComment: '',
    }
  },
  async mounted () {
    var result = await reqArticle({id: this.$route.params.id})
    this.article = result.data
    var resultcomment = await reqComment({article_id: this.article._id})
    this.comments = resultcomment.data
  },
  methods: {
    async submit () {
      if(this.newComment.length < 5)return alert('评论要大于五个字哦qaq')
      const result = await reqaddComment({
        article_id: this.article._id,
        comment_user_email: this.$store.state.user.email,
        comment_user_nickname: this.$store.state.user.nickname,
        comment_content: this.newComment,
        password: this.$store.state.user.password
      })
      this.comments.unshift(result.data)
      console.log(result)
      this.newComment = ''
    }
  },
  components: {
    mavonEditor,
  },
};
</script>

<style>
#article-vue_container{
  /* background: rgb(115, 208, 236,0.5); */
  border-radius: 50px;
  width: 90%;
  margin: 10px auto;
  /* opacity: 0.2; */
}
#article-vue_img_container{
  /* background: chocolate; */
  border-radius: 60px;
  max-width: 500px;
  margin: 0 auto;
}
#article-vue_articleImg{
  display: block;
  margin: 10px auto;
  width: 300px;
}
#article-vue_text_container{
  border-radius: 30px;
  background: rgba(97, 235, 235, 0.5);
  margin: 0 auto;
  text-align: center;
  width: 90%;
}
#article-vue_content{
  border-radius: 50px;
}
#article-vue_comments_container{
  display: block;
  border-radius: 30px;
  background: rgba(97, 235, 235, 0.5);
  margin: 20px auto;
  width: 90%;
  transition: all 0.5s;
}
#article-vue_comments_user{
  margin: 5px 20px;
  font-size: 14px;
}
#article-vue_comments_container:hover{
  box-shadow: 0 0 10px 1px cornsilk;
}
#article-vue_add_container{
  border-radius: 30px;
  background: rgba(97, 235, 235, 0.5);
  margin: 20px auto;
  width: 90%;
  transition: all 0.5s;
}
#article-vue_add_btn{
  margin: 5px 20px;
  font-size: 14px;
  display: flex;
}
#article-vue_add_container:hover{
  box-shadow: 0 0 10px 1px rgb(119, 240, 95);
}

#article-vue_add_btn>button{
  width: 80px;
  height: 38px;
  border-radius: 20px;
  background-color: #bfa;
  margin-left: 20px;
}
#article-vue_add_btn>input{
  border-radius: 20px;
  background-color: rgb(208, 248, 198,0.5);
}
</style>