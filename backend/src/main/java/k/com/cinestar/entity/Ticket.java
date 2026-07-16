package k.com.cinestar.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(
        uniqueConstraints = {
            @UniqueConstraint(
                    name = "uk_ticket_seat_show",
                    columnNames = {"seat_id", "show_id"})
        })
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_ticket_show"))
    Show show;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_ticket_seat"))
    Seat seat;

    BigDecimal price;
}
