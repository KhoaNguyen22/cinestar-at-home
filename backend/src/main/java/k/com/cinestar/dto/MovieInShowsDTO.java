package k.com.cinestar.dto;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.Set;
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MovieInShowsDTO {
    Integer id;

    String posterUrl;
    String title;
    Set<String> genres;
    int duration;
    String country;
    String subtitle;
    String ageRating;
}
