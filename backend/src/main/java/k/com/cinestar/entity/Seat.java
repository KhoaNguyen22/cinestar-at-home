package k.com.cinestar.entity;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import k.com.cinestar.enums.SeatType;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String seatNumber;

    @Enumerated(EnumType.STRING)
    SeatType seatType;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_seat_screen"))
    Screen screen;
}
