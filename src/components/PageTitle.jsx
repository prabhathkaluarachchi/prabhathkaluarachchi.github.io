import React, { useEffect } from 'react';

function PageTitle({ title }) {
  useEffect(() => {
    document.title = `${title}`; // Dynamic browser title
  }, [title]);

  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
