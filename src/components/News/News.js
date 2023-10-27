import React from 'react';
import './news.css'

export default function News() {

    return (
        <div className='news-con'>
            <h2>Facebook News Feed</h2>
            {/* style={{border: 'none', overflow: 'hidden'}} */}
            <section className='content-section'>

            {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmckinleyvillefeed%2Fposts%2Fpfbid02A3oi7ZscBUHAAX4W2cJe8fjGVpempcpY23YFQQMiaiUQfV1kY2QyRUQrpzPot4qel&show_text=true&width=500" width="500" height="562" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmckinleyvillefeed%2Fposts%2Fpfbid02A3oi7ZscBUHAAX4W2cJe8fjGVpempcpY23YFQQMiaiUQfV1kY2QyRUQrpzPot4qel&show_text=true&width=500" width="500" height="562" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fmckinleyvillefeed%2Fvideos%2F708486440153759%2F&show_text=false&width=269&t=0" width="269" height="476" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmckinleyvillefeed%2Fphotos%2Fa.670599229630272%2F5324128620943953%2F%3Ftype%3D3&show_text=true&width=500" width="500" height="497" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            
            </section>
            
        </div>
    )
}