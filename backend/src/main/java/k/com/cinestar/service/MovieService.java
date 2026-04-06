package k.com.cinestar.service;

import k.com.cinestar.entity.Movie;
import k.com.cinestar.repository.MovieRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;
    public List <Movie> findAllMovies (){
        return movieRepository.findAll();
    }
    public void addMovie(Movie movie){
        movieRepository.save(movie);
    }
}
