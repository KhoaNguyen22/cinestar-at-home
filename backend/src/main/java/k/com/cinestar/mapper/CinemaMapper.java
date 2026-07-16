package k.com.cinestar.mapper;

import k.com.cinestar.dto.CinemaOptionDTO;
import k.com.cinestar.entity.Cinema;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CinemaMapper {
    CinemaOptionDTO toCinemaOptionDTO (Cinema cinema);
}
