import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import Loader from "../components/Loader/Loader";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTop
        smooth
        component={<IoIosArrowUp color="#000" />}
        className="circle-ripple"
      />
    </>
  );
}

export default App;
