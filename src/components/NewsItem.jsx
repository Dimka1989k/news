export const NewsItem = ({ title, description, src, url }) => {
    const defaultImage = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2 justify-content-center" style={{maxWidth: "345px", maxHeight: "520px"}}>
      <img src={src || defaultImage} style={{height: "200px", width: "327px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,50): "Content not found"}</p>
        <a href={url} className="btn btn-danger">
          Read More
        </a>        
      </div>
    </div>
  );
};