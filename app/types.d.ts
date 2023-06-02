export interface Weather    { 
    now:        number;
    now_dt:     Date;
    info:       Info;
    geo_object: GeoObject;
    yesterday:  Yesterday;
    fact:       Fact;
    forecasts:  Forecast[];
}

export interface Fact   { 
    obs_time?:     number;
    uptime?:       number;
    temp:          number;
    feels_like:    number;
    icon:          string;
    condition:     string;
    cloudness:     number;
    prec_type:     number;
    prec_prob:     number;
    prec_strength: number;
    is_thunder:    boolean;
    wind_speed:    number;
    wind_dir:      string;
    pressure_mm:   number;
    pressure_pa:   number;
    humidity:      number;
    daytime?:      string;
    polar?:        boolean;
    season?:       string;
    source?:       string;
    soil_moisture: number;
    soil_temp:     number;
    uv_index:      number;
    wind_gust:     number;
    hour?:         string;
    hour_ts?:      number;
    prec_mm?:      number;
    prec_period?:  number;
}

export interface Forecast   { 
    date:       Date;
    date_ts:    number;
    week:       number;
    sunrise:    string;
    sunset:     string;
    rise_begin: string;
    set_end:    string;
    moon_code:  number;
    moon_text:  string;
    parts:      Parts;
    hours:      Fact[];
    biomet:     Biomet;
}

export interface Biomet   { 
    index:     number;
    condition: string;
}

export interface Parts   { 
    evening:     Day;
    morning:     Day;
    day_short:   Day;
    day:         Day;
    night_short: Day;
    night:       Day;
}

export interface Day   { 
    _source:       string;
    temp_min?:     number;
    temp_avg?:     number;
    temp_max?:     number;
    wind_speed:    number;
    wind_gust:     number;
    wind_dir:      string;
    pressure_mm:   number;
    pressure_pa:   number;
    humidity:      number;
    soil_temp:     number;
    soil_moisture: number;
    prec_mm:       number;
    prec_prob:     number;
    prec_period:   number;
    cloudness:     number;
    prec_type:     number;
    prec_strength: number;
    icon:          string;
    condition:     string;
    uv_index:      number;
    feels_like:    number;
    daytime:       string;
    polar:         boolean;
    fresh_snow_mm: number;
    temp?:         number;
}

export interface GeoObject   { 
    district: Country;
    locality: Country;
    province: Country;
    country:  Country;
}

export interface Country   { 
    id:   number;
    name: string;
}

export interface Info   { 
    n:               boolean;
    geoid:           number;
    url:             string;
    lat:             number;
    lon:             number;
    tzinfo:          Tzinfo;
    def_pressure_mm: number;
    def_pressure_pa: number;
    slug:            string;
    zoom:            number;
    nr:              boolean;
    ns:              boolean;
    nsr:             boolean;
    p:               boolean;
    f:               boolean;
    _h:              boolean;
}

export interface Tzinfo   { 
    name:   string;
    abbr:   string;
    dst:    boolean;
    offset: number;
}

export interface Yesterday   { 
    temp: number;
}