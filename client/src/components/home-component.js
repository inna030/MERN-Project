import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Learning system</h1>
             <p className="col-md-8 fs-4">

             </p>
             <button className="btn btn-primary btn-lg" type="button">
               See how it works.
             </button>
           </div>
         </div>

         <div className="row align-items-md-stretch">
           <div className="col-md-6">
             <div className="h-100 p-5 text-white bg-dark rounded-3">
               <h2>As a student</h2>
               <p>
                 Students can register for courses of their choice. This site is for practice purposes only, please do not provide any personal information such as credit card numbers.
               </p>
               <button className="btn btn-outline-light" type="button">
                 Log in as a member or register an account
               </button>
             </div>
           </div>
           <div className="col-md-6">
             <div className="h-100 p-5 bg-light border rounded-3">
               <h2>As a mentor</h2>
               <p>
                 You can become an instructor by signing up and start creating online courses. This site is for practice purposes only, please do not provide any personal information such as credit card numbers.
               </p>
               <button className="btn btn-outline-secondary" type="button">
                 Courses start today
               </button>
             </div>
           </div>
         </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2023 Inna Lu
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
