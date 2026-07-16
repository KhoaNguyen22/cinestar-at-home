package k.com.cinestar.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import k.com.cinestar.entity.Movie;
import k.com.cinestar.service.MovieService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.findAllMovies();
    }
}
