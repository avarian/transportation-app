function Home() {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">My Namus</h1>
            <p className="col-md-8 fs-4">Sahabat Perjalanan Anda.</p>
            <p className="col-md-8 fs-4">
              Perjalanan akan semakin mudah ditemani dengan kenikmatan,
              kemudahan Teknologi
            </p>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Kai Train</h2>
              <p>Perjalanan kereta api indonesia yang dimuat dengan menarik</p>
              <a className="btn btn-outline-light" type="button" href="/kai">
                Explore
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Airlines</h2>
              <p>Comming Soon</p>
              <a className="btn btn-outline-secondary" type="button" href="#">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
