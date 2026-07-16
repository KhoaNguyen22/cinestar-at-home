package k.com.cinestar.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "`show`")

public class Show {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_show_movie"))
    @JsonBackReference
    Movie movie;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_show_screen"))
    Screen screen;

    LocalDateTime startTime;
    LocalDateTime endTime;
}
