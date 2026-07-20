package k.com.cinestar.mapper;

import k.com.cinestar.dto.MovieDetailDTO;
import k.com.cinestar.dto.MovieInShowsDTO;
import k.com.cinestar.entity.Genre;
import k.com.cinestar.entity.Movie;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface MovieMapper {

    MovieInShowsDTO toMovieInShowsDTO(Movie movie);
    MovieDetailDTO toMovieDetailDTO(Movie movie);
    default String map(Genre genre){
        return genre.getName();
    }

}
