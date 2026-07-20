package k.com.cinestar.controller;

import java.util.List;

import k.com.cinestar.dto.MovieDetailDTO;
import k.com.cinestar.dto.MovieInShowsDTO;

import org.springframework.web.bind.annotation.*;

import k.com.cinestar.service.MovieService;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;


    @GetMapping("/showing")
    public List<MovieInShowsDTO> getMoviesInCurrentShows() {
        return movieService.getMoviesInCurrentShows();
    }
    @GetMapping("/upcoming")
    public List<MovieInShowsDTO> getMoviesInUpcomingShows() {
        return movieService.getMoviesInUpcomingShows();
    }
    @GetMapping("/{movieId}")
    public MovieDetailDTO getMovieDetail(@PathVariable int movieId) {
        return movieService.getMovieDetail(movieId);
    }
}
