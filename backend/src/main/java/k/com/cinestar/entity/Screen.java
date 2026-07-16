package k.com.cinestar.entity;

import java.util.List;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Screen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @OneToMany(mappedBy = "screen")
    @JsonManagedReference
    List<Seat> seats;

    String name;


    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_screen_cinema"))
    Cinema cinema;
}
