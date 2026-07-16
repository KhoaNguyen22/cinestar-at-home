package k.com.cinestar.dto;

import jakarta.persistence.Entity;
import k.com.cinestar.entity.Genre;
import k.com.cinestar.entity.Show;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)

public class MovieDetailDTO {
    Integer id;

    String posterUrl;
    String title;
    List<LocalDate> daysOfShows;

    int duration;
    String country;
    String subtitle;
    String ageRating;
    List<String> directors;
    List<String> cast;
    LocalDate releaseDate;
    String content;
    Set<String> genres;
}
