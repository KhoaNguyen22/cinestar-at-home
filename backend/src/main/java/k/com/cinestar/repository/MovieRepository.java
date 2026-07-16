package k.com.cinestar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import k.com.cinestar.entity.Movie;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    @Query("""
    SELECT DISTINCT m
    FROM Movie m
    JOIN FETCH m.genres
    JOIN m.shows s
    WHERE s.startTime BETWEEN :start AND :end
""")
    List<Movie> findMoviesInShowsBetweenDate(LocalDateTime start, LocalDateTime end);


    @Query("""
    SELECT DISTINCT m
    FROM Movie m
    JOIN FETCH m.genres
    WHERE m.id = :id
""")
    Optional<Movie> findMovieById(int id);

}
