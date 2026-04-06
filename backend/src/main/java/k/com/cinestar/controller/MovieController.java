package k.com.cinestar.controller;

import k.com.cinestar.entity.Movie;
import k.com.cinestar.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movie")
@RequiredArgsConstructor
public class MovieController {
    private final MovieService movieService;
    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.findAllMovies();
    }
}
