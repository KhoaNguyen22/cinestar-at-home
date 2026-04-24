package k.com.cinestar.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import k.com.cinestar.entity.Cinema;
import k.com.cinestar.service.CinemaService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cinemas")
@RequiredArgsConstructor
public class CinemaController {
    private final CinemaService cinemaService;

    @GetMapping
    public List<Cinema> getAllCinema() {
        return cinemaService.findAllCinemas();
    }
}
