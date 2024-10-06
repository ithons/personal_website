export default function Photography() {
    return (
      <div>
        <h1>My Photography</h1>
        <div className="grid grid-cols-3 gap-4">
          <img src="/photo1.jpg" alt="Photo 1" />
          <img src="/photo2.jpg" alt="Photo 2" />
          <img src="/photo3.jpg" alt="Photo 3" />
        </div>
      </div>
    );
  }