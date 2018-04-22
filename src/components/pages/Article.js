import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments  } from 'react-facebook';
import Layout from '../layout/App';



const Header = () => (
  <header>
    <h1>ES6 Căn bản (phần 1) - Những nâng cấp cho Object</h1>
    <div className="entry-meta">
      <a href="" className="fa fa-user"> Mouse</a>
      <a href="" className="fa fa-folder-open"> JavaScript</a>
      <a href="" className="fa fa-comment"> 8 phản hồi</a>
      <a href="" className="fa fa-clock-o"> 04/20/2018</a>
    </div>
  </header>
);

class Content extends Component {
  render() {
    return (
      <div className="post-content">
        Cảm giác ban đầu của các bạn thế nào? Nhìn khó chịu đúng không? Tôi cũng vậy. Để giới thiệu qua đoạn code này
        một tí. Đây
        là đoạn code viết bằng OpenGL Shading Language, có thể giới thiệu đại khái đây là ngôn ngữ cấp cao (high
        level language) dành cho việc lập trình các shader trong OpenGL (cái này chắc các bạn lập trình game với
        OpenGL hiểu rõ hơn, các bạn giúp mình giải thích rõ hơn trong phần comment nhé). Đoạn code này để làm việc
        gì? Đoạn code này được trích ra từ một ứng dụng xem ảnh trên web (tương tự Google Photo), và nhiệm vụ của
        nó là tính giá trị màu sắc của một điểm ảnh sau khi áp dụng filter, cụ thể ở đây là blur (làm mờ). Thuật
        toán đằng sau nó là gì? Trước khi đi sâu vào đoạn code đó, chúng ta cùng nhìn qua về mặt giải thuật. Để tính
        được giá trị màu sắc của một điểm trên ảnh sau khi áp dụng filter chúng ta không thể chỉ thay đổi giá trị
        màu sắc của chính điểm đó bằng cách cộng trừ nhân chia với một giá trị delta nào đó, bởi vì làm vậy thì màu
        sắc của từng điểm sẽ dễ dàng bị khác biệt và tạo ra cảm giác không đẹp, vì bức ảnh là một tổ hợp của rất
        nhiều điểm. Cách giải quyết mà người ta áp dụng vô trường hợp này là thay vì chỉ lấy giá trị màu của một
        điểm, người ta lấy thêm giá trị màu của những điểm xung quanh nó, cụ thể ở đây là lấy điểm muốn thay đổi
        màu sắc là tâm và tạo thành một ma trận 5×5 xung quanh nó (như vậy tổng cộng ta lấy 25 điểm), thật ra lấy
        bao nhiêu điểm cũng được, có thể là 3×3, 7×7, có thể ở trường hợp này 5×5 là giá trị cho ra bức ảnh đẹp nhất.
        Nghe khó hiểu đúng không, tôi có vẽ hình minh hoạ đây. sketch.png
      </div>
    );
  }
}

const Share = () => (
  <div>
    chia se
  </div>
);

const Tag = () => (
  <div className="tags col-sm-12">
    <span>Tags </span>
    <a className="tag" href="#">Promise</a>
    <a className="tag" href="#">Promise</a>
    <a className="tag" href="#">Promise</a>
  </div>
);

const Navigation = () => (
  <div className="article-navigation col-sm-12 mt-4 mb-4">
    <hr />
      <a className="article-navigation-left" href="">
        <i className="fa fa-arrow-left"></i> Mới hơn
      </a>
    <a className="article-navigation-right" href="">
      Cũ hơn
      <i className="fa fa-arrow-right" href=""></i>
    </a>
    <hr />
  </div>
);

const Suggest = (props) => (
  <div className="suggest col-sm-12">
    <p>Bài viết hay</p>
    <div className="row">
      {props.children}
    </div>

  </div>
);

Suggest.propTypes = {
  children: PropTypes.node.isRequired,
};

const SuggestItem = (props) => (
  <div className="col-sm-6 card flex-md-row mb-1 box-shadow h-md-250">
    <div className="row">
      <div className="col-sm-4" style={props.resizePadding}>
        <img className="card-img-right flex-auto d-none d-lg-block"
             src="./img/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" />
      </div>
      <div className="col-sm-8" style={props.resizePadding}>
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="title">
            <a className="text-dark" href="#">Featured post</a>
          </h3>
          <p className="card-text mb-auto ">This is a wider card with supporting text below as a natural lead-in to
            additional content.</p>
        </div>
      </div>
    </div>
  </div>
);

SuggestItem.propTypes = {
  resizePadding: PropTypes.string.isRequired,
};

const FacebookComments = () => (
    <FacebookProvider appId="2077250975839277">
      <Comments href="https://www.facebook.com/permalink.php?story_fbid=191243321677734&id=140503326751734" />
    </FacebookProvider>
);

const ArticleContent = props => (
  <div className="article col-sm-12">
    {props.children}
  </div>
);

ArticleContent.propsTypes = {
  children: PropTypes.node.isRequired,
};

class Post extends React.Component {
  render() {
    return (
      <Layout>
        <ArticleContent>
          <Header />
          <Content />
        </ArticleContent>
        <Share />
        <Tag />
        <Navigation />
        <Suggest >
          <SuggestItem resizePadding={{padding: 0}}/>
          <SuggestItem resizePadding={{padding: 0}}/>
          <SuggestItem resizePadding={{padding: 0}}/>
          <SuggestItem resizePadding={{padding: 0}}/>
        </Suggest>
        <ArticleContent>
          <FacebookComments />
        </ArticleContent>
      </Layout>
    );
  }
}

export default Post;
