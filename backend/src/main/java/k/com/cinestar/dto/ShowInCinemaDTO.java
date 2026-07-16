package k.com.cinestar.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
public class ShowInCinemaDTO {
    Long showId;
    Integer movieId;
    Integer cinemaId;
    LocalDateTime startTime;


}
