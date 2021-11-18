## Intro

This is set of Terraform instructions how to build example services with Aiven.

It is used to demonstrate migration path from TF 0.12 with Aiven provider 1.3.5 to TF 1.0.9+ with Aiven provider 2.1.x

### Service map

```
                                       ┌──────────────┐
                                       │   Kibana     │
                                       │              │
                                       └───────▲──────┘
                                               │
                                       ┌───────┴──────┐
                                       │              │
      ┌────────────Logs────────────────►  OpenSearch  ◄──────────Logs───────────┐
      │                                │              │                         │
      │                                │              ◄─────────────────┐       │
      │                                └───────┬──────┘                 │       │
      │                                        │                        │       │
      │                                        │                        │       │
      │                                 ┌──────▼──────┐  ┌───────────┐  │       │
      │                                 │             │  │           │  │       │
      │                                 │   InfluxDB  ├──►  Grafana  │  │       │
      │      ┌───────Metrics────────────►             │  │           │  │       │
      │      │                          └▲─────▲─────▲┘  └───────────┘  │       │
      │      │                           │     │     │                ┌─┘       │
      │      │                           │     │     │                │         │
      │      │                         ┌─┘     │     │                │      ┌──┴────────┐
      │      │                         │       │     │                │      │           │
      │      │                         │       │     └────Metrics─────┼──────┤  Redis    │
      │      │                         │       │                      │      │           │
      │      │                         │       │                      │      └────────▲──┘
┌─────┴──────┴─┐  ┌────────────────┐   │       │                      │               │
│   Postgres   │  │  Postgres      │   │       │                      │               │
│   Cluster    ├──►  Read Replica  │   │       │                      │               │
│              │  │                ├───┘       │                      │               │
└─────▲────────┘  └────────────────┘           └─┐                    │               │
      │                                          │                    │               │
      │                                          │                    │               │
      │                                          │                    │               │
      │                                       Metrics                 │               │
      │                                          │                    │               │
      │                                          │                    │               │
      │                                      ┌───┴───────────┐        │               │
      │                                      │               │        │               │
      │                                      │   Kafka       │        │               │
      │                                      │               ├─Logs───┘               │
      │                                      │               │                        │
      │                                      └──────▲────────┘                        │
      │                                               │                               │
      │                                    ┌──────────┴──────────┐                    │
      │                                    │                     │                    │
      │                                    │    Kafka Connect    │                    │
      │                        ┌───────────┼──────┐        ┌─────┼───────────┐        │
      │                        │           │xxxxxx│        │xxxxx│           │        │
      │                        │           └──────┼────────┼─────┘           │        │
      └────────────────────────┤     Debezium     │        │    Redis Sink   ├────────┘
                               │                  │        │                 │
                               │                  │        │                 │
                               └──────────────────┘        └─────────────────┘
```

### How to run

#### Requirements

* [Aiven API token](https://help.aiven.io/en/articles/2370350-aiven-terraform-integration)
* `psql` should be installed locally (*sigh*)
* `make`
* `terraform`
* `tfenv` (Optional)
* some bitter brew of your choice🥤(Optional)

#### Commands

`make plan`

`make apply`
