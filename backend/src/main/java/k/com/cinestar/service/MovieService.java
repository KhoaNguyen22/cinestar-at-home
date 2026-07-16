package k.com.cinestar.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import java.util.List;
import java.util.NoSuchElementException;

import k.com.cinestar.dto.MovieDetailDTO;
import k.com.cinestar.dto.MovieInShowsDTO;
import k.com.cinestar.entity.Movie;
import k.com.cinestar.mapper.MovieMapper;
import k.com.cinestar.repository.ShowRepository;
import org.springframework.stereotype.Service;

import k.com.cinestar.repository.MovieRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;
    private final ShowRepository showRepository;
    private final MovieMapper movieMapper;
    public List<MovieInShowsDTO> getMoviesInCurrentShows() {
        LocalDateTime start = LocalDate.now().atStartOfDay();
        LocalDateTime end =  LocalDate.now().plusDays(4).atTime(LocalTime.MAX);
        return movieRepository.findMoviesInShowsBetweenDate(start, end)
                .stream()
                .map(movieMapper::toMovieInShowsDTO)
                .toList();
    }
    public List<MovieInShowsDTO> getMoviesInUpcomingShows(){
        LocalDateTime start = LocalDate.now().plusDays(5).atStartOfDay();
        LocalDateTime end = LocalDate.now().plusDays(12).atTime(LocalTime.MAX);
        return movieRepository.findMoviesInShowsBetweenDate(start,end)
                .stream().map(movieMapper::toMovieInShowsDTO)
                .toList();

    }
    public MovieDetailDTO getMovieDetail(int id) {
        Movie movie = movieRepository.findMovieById(id)
                .orElseThrow(()->
                new NoSuchElementException("Movie not found"));
        MovieDetailDTO movieDetailDTO = movieMapper.toMovieDetailDTO(movie);

        movieDetailDTO.setDaysOfShows(showRepository.findDaysOfShows(id)
                .stream()
                .map(LocalDateTime::toLocalDate)
                        .distinct()
                .toList());
        return movieDetailDTO;
    }


}
