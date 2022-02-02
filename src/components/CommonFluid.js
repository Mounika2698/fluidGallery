import { useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import loader from "./assets/loader.svg";
import Header from "./Header";
import Footer from "./Footer";

const CommonFluid = () => {
  const [albums, setAlbums] = useState([]);
  const [overAllLimit, setOverAllLimit] = useState(5);
  const overAllLength = 500000;
  const [pageNum, setPageNum] = useState(1);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);

  const getAllAlbums = async () => {
    const { data: allAlbumsReponse } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${pageNum}_limit=1`
    );
    setAlbums((prev) => [...prev, ...allAlbumsReponse]);
    setOverAllLimit((prev) => prev + 10);
    setPageNum((prev) => prev + 1);
  };

  const previousImage = () => {
    selectedAlbum?.id == 1
      ? setPrevDisable(true)
      : setSelectedAlbum({
          ...albums[selectedAlbum?.index - 1],
          index: selectedAlbum?.index - 1,
        });
  };

  const nextImage = () => {
    selectedAlbum?.id == albums.length
      ? setNextDisable(true)
      : setSelectedAlbum({
          ...albums[selectedAlbum?.index + 1],
          index: selectedAlbum?.index + 1,
        });
  };

  return (
    <div>
      <Header />
      <InfiniteScroll
        className="row m-0"
        pageStart={0}
        loadMore={getAllAlbums}
        hasMore={overAllLength >= overAllLimit}
        loader={
          <div className="loading-text">
            Loading
            <span className="loader">
              <img src={loader} />
            </span>
          </div>
        }
      >
        {albums.map((album, i) => (
          <div className="col-sm-3 col-lg-3 col-md-3 col-xl-3 col-xs-12 p-0 gallery hover-overlay ripple ">
            <div
              class="hovereffect"
              onClick={() => setSelectedAlbum({ ...album, index: i })}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                src={album.thumbnailUrl}
                style={{ height: "350px" }}
                className="w-100 img-responsive gallery-img"
              />
              <div class="overlay">
                <h2 className="gallery-img-title"> photo{i + 1} </h2>
                <p className="gallery-img-description">
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
                  ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem
                  ipsumlorem ipsum lorem ipsum
                </p>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog custom-gallery-modal">
          <div class="modal-content w-100 h-75">
            <div class="modal-body w-100 P-0">
              <div
                id="carouselExampleControls"
                class="carousel slide w-100 h-100 carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                  </button>
                  {albums.map((album, i) => (
                    <div
                      class={
                        selectedAlbum?.id == album.id
                          ? "carousel-item active w-100 h-100"
                          : "carousel-item w-100 h-100"
                      }
                    >
                      <img
                        class="d-block w-100 h-100"
                        src={album.thumbnailUrl}
                        alt="First slide"
                      />
                    </div>
                  ))}
                  <p>{`${selectedAlbum?.id} of ${albums.length}`}</p>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  onClick={previousImage}
                  disabled={prevDisable}
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  onClick={nextImage}
                  disabled={nextDisable}
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CommonFluid;
