package k.com.cinestar.entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "movie_genre",
            joinColumns = @JoinColumn(name = "movie_id", foreignKey = @ForeignKey(name = "fk_movie_genre_movie")),
            inverseJoinColumns =
                    @JoinColumn(name = "genre_id", foreignKey = @ForeignKey(name = "fk_movie_genre_genre")))
    Set<Genre> genres;


    @OneToMany(mappedBy = "movie",fetch =  FetchType.LAZY)
     @JsonManagedReference
    List<Show> shows;

    int duration;
    String country;
    String subtitle;
    String ageRating;
    String description;
    String content;
}
