import React, { Component } from 'react'

export class Newsitem extends Component {

  
  render() {
    let {title , description, imageurl, newsurl} = this.props; // title and description both are diff for every news item so we have  to pass it via props
    return (
      <div>
        <div className='my-3'>
        <div className="card" style= {{width: "5rem;"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>  
  {/* imgurl props used overhere */}
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target='blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
</div>
      </div>
    )
  }
}

export default Newsitem
