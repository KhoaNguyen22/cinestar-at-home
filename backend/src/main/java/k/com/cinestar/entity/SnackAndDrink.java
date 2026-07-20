package k.com.cinestar.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SnackAndDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String name;
    BigDecimal price;
    String description; 
    @ManyToOne
    @JoinColumn(name = "category_id")
    SnackAndDrinkCategory category;

}
