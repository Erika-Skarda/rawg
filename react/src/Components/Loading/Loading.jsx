import React, { Fragment } from 'react';

export default function VideogameSkeletonLoad() {
  return (
    <Fragment>
      <div className='container'>
        <header border-bottom='1px' solid='#000'>
          <h2 className='col-12 display-4 mt-2 heading-line bg-secondary text-secondary'>&zwnj;</h2>
          <div className='col-6 badge badge-secondary text-secondary'>&zwnj;</div>
          <div className='col-6 badge badge-secondary text-secondary'>&zwnj;</div>
          <div className='my-2'>
            <div className='col-6 badge badge-secondary text-secondary'>&zwnj;</div>
          </div>
        </header>
        <div className='row text-white bg-dark img-background details-background'>
          <div className='col-md-12 my-3 d-none d-md-block'>
            <div className='img-style bg-secondary text-center p-5' style={{ minHeight: '170px' }}>
              &zwnj;
            </div>
          </div>
          <div className='col my-3'>
            <h3 className='bg-secondary p-4 text-center'>
              Loading {' '}
              <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span className='sr-only'></span>
            </h3>
            <div className='col-md-12 my-3 d-none d-md-block'>
            <div className='img-style bg-secondary text-center p-5' style={{ minHeight: '170px' }}>
              <svg width='100' height='100'>
                <circle cx='45' cy='45' r='45' fill='#555' />
              </svg>{' '}
              <svg width='100' height='100'>
                <circle cx='45' cy='45' r='45' fill='#555' />
              </svg>{' '}
              <svg width='100' height='100'>
                <circle cx='45' cy='45' r='45' fill='#555' />
              </svg>{' '}
              <svg width='100' height='100'>
                <circle cx='45' cy='45' r='45' fill='#555' />
              </svg>{' '}
            </div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}