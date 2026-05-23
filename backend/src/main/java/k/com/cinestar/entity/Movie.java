package k.com.cinestar.entity;

import java.util.Set;

import jakarta.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String posterUrl;
    String title;

    @ManyToMany
    @JoinTable(
            name = "movie_genre",
            joinColumns = @JoinColumn(name = "movie_id", foreignKey = @ForeignKey(name = "fk_movie_genre_movie")),
            inverseJoinColumns =
                    @JoinColumn(name = "genre_id", foreignKey = @ForeignKey(name = "fk_movie_genre_genre")))
    Set<Genre> genres;

    int duration;
    String country;
    String language;
    String ageRating;
    String description;
    String content;
}
